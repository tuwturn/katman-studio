import {test} from 'node:test';
import assert from 'node:assert/strict';
import {historyKey,isTextEntry} from '../src/editor-history.js';
test('undo and redo shortcuts support Windows and Mac key combinations',()=>{
 assert.equal(historyKey({key:'z',ctrlKey:true}),'undo');assert.equal(historyKey({key:'Z',metaKey:true,shiftKey:true}),'redo');assert.equal(historyKey({key:'y',ctrlKey:true}),'redo');assert.equal(historyKey({key:'z',ctrlKey:true,altKey:true}),null);assert.equal(historyKey({key:'z'}),null);
});
test('text editing keeps its own undo; dropdowns, buttons and canvas use model history',()=>{
 assert.equal(isTextEntry({tagName:'INPUT',type:'number'}),true);assert.equal(isTextEntry({tagName:'TEXTAREA'}),true);assert.equal(isTextEntry({isContentEditable:true}),true);for(const element of [{tagName:'INPUT',type:'checkbox'},{tagName:'INPUT',type:'range'},{tagName:'SELECT'},{tagName:'BUTTON'},{tagName:'CANVAS'},null])assert.equal(isTextEntry(element),false);
});
