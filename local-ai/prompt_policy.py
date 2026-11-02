"""Presentation and main-subject constraints; never choose predefined geometry."""
import re

STYLES={'auto','realistic','caricature','cartoon','illustration','anime','clay','sketch'}

def close_view_requested(prompt):
    return bool(re.search(r'\b(?:portrait|headshot|bust|close[- ]up)\b',prompt,re.I))

def normalize_caption(prompt):
    prompt=str(prompt).strip().rstrip('.')
    for pattern,replacement in [(r'\bwho (?:is )?sits(?: down)?\b','sitting'),(r'\bwho is sitting\b','sitting')]:
        prompt=re.sub(pattern,replacement,prompt,flags=re.I)
    return prompt

def subject_caption(prompt,single):
    prompt=normalize_caption(prompt)
    if not single:return prompt
    prompt=re.sub(r"^(?:it(?:'s| is)\s+)?(?:a|an|the|one)\s+",'',prompt,flags=re.I)
    if re.match(r'^(?:[2-9]|two|three|four|five|six|seven|eight|nine|several|many)\b',prompt,re.I):
        raise ValueError("Tarif birden fazla ana konu içeriyor. Birden fazla istiyorsanız 'Tek ana konu' seçeneğini kapatın.")
    for plural,singular in [('people','person'),('men','man'),('women','woman'),('children','child'),('persons','person')]:
        prompt=re.sub(r'\b'+plural+r'\b',singular,prompt,flags=re.I)
    return 'one '+prompt

def styled_prompt(prompt,style='auto',person=False,single=True):
    if style not in STYLES:raise ValueError('Geçersiz çizim tarzı.')
    subject=subject_caption(prompt,single)
    mono=bool(re.search(r'\b(monochrome|grayscale|sepia|black and white)\b',prompt,re.I))
    kinds={
        'auto':'image','realistic':'realistic photograph' if mono else 'realistic color photograph',
        'caricature':'caricature illustration','cartoon':'stylized 3D cartoon render',
        'illustration':'2D cartoon illustration','anime':'anime illustration',
        'clay':'clay sculpture render','sketch':'pencil drawing',
    }
    kind=kinds[style];close=close_view_requested(prompt)
    framing='full body ' if person and not close else ''
    result=('An ' if not framing and kind[0].lower() in 'aeiou' else 'A ')+framing+kind+' of '+subject
    if not close:result+=', head and feet visible, entire figure in frame' if person else ', entire subject in frame'
    if single:result+=', solo' if person else ', single main subject'
    if style=='caricature':result+=', vibrant full-color palette, expressive exaggerated features, clean bold outlines'
    if style in {'cartoon','illustration','anime'} and not mono:result+=', vibrant full-color palette, clear contrasting colors'
    if style=='realistic':result+=', natural proportions, soft lighting'
    return result+', plain white background'

def negative_prompt(prompt,style='auto',person=False,single=True):
    terms=['blurry','low resolution']
    if not close_view_requested(prompt):terms+=['close-up','cropped','out of frame']
    if style=='realistic':terms+=['deformed face','malformed hands','extra limbs']
    if style in ['caricature','cartoon','illustration','anime','sketch']:
        terms+=['photograph','photorealism','photographic texture']
    if style in {'caricature','cartoon','illustration','anime'} and not re.search(r'\b(monochrome|grayscale|sepia|black and white)\b',prompt,re.I):terms+=['monochrome','grayscale','sepia','woodcut','engraving']
    if single:
        terms+=['group photo','crowd','multiple people','extra person','duplicate person'] if person else ['duplicate main subject','multiple main subjects']
    return ', '.join(terms)

def figure_size(prompt,person):
    seated=bool(re.search(r'\b(sitting|seated|kneeling|crouching|lying)\b',prompt,re.I))
    return (768,1344) if person and not seated and not close_view_requested(prompt) else (1024,1024)
