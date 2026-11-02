# Katman Studio

Katman Studio is a desktop application for converting raster artwork into editable vector regions and 3D reliefs, editing existing 3D models, and creating 3D concepts from text or images with local AI models.

## Features

- **Image to vector and relief:** Import common image formats, trace smooth vector boundaries, select individual regions or nearby colors, assign relief heights, preview the result, and export 3MF, STL, OBJ, or SVG.
- **3D model editing:** Open STL, 3MF, and OBJ files. Select surface areas with points, remove raised sections, flatten or fill areas, undo edits, and export the result.
- **Text or image to 3D:** Generate a local 2D concept from a text description or an imported image, review it, then create and preview a 3D model. Choose a visual style and whether the description should focus on one subject. Export 3MF, STL, or OBJ.
- **Local processing:** Installed AI models run on the selected computer without a generation API key. Model downloads are optional and take place during setup.
- **Local network access:** Run the bundled web server to use the vector and editing workspaces from browsers on the same network. Local AI generation runs on the computer hosting the server.
- **macOS:** Download the matching Apple Silicon or Intel package from GitHub Releases.

AI-generated shapes and hidden surfaces are estimates. Review the preview and exported mesh before fabrication. Image-to-relief conversion follows the source artwork; details absent from the image are not reconstructed.

## Launch

On Windows, open `Baslat.bat` or `Masaustu/Katman Studio/Katman Studio.exe`. Keep the packaged application folder together when moving it. The vector and mesh-editing workspaces run locally and do not require a browser, server, or network connection.

The first local AI model setup requires an internet connection. Once installed, generation runs locally. Model files are stored outside the repository and are not included in the application package.

## Local network browser access

On Windows, open `Masaustu/Katman Studio/Web-Sunucusu-Baslat.bat`. The console lists the local addresses to use from another device on the same network. Keep the server window open while connecting. Use `Ctrl+C` to stop the server.

To run from source, use `npm run start:web -- --lan --open`. Without `--lan`, the server is only available on the current computer.

## macOS

Download a DMG or ZIP for the Mac's processor from the repository's Releases page. Move the application to Applications. The first launch may show a security notice because the packages are not notarized.

To build from source:

```sh
npm ci
npm run build
npm start
npm run package:mac -- --arm64  # Apple Silicon
npm run package:mac -- --x64    # Intel
```

## Image to relief workflow

1. Open a PNG, JPG, WEBP, BMP, SVG, or another supported image.
2. Review the vectorized artwork and 3D preview.
3. Select a region on the canvas, or select matching/nearby colors.
4. Set a relief height from 0 to 250 mm, in 0.02 mm increments.
5. Export in the desired format.

Disconnected regions with the same color can be adjusted individually or together. Background removal can be switched on or off before processing.

3MF retains color regions and relief geometry. STL contains geometry without color. OBJ exports geometry with an MTL file. SVG preserves editable vector paths.

## 3D model editing

Open an STL, 3MF, or OBJ file in **3D model editing**. Use the point selection tool to outline an area. Choose an operation to cut, flatten, or fill the selected area. Set a reference surface when an operation should align to an existing plane. Use Undo and Redo to review edits before export.

The editor performs local surface operations; it does not automatically recognize text or infer curved surfaces beyond the selected region. Inspect the preview and check the mesh in the intended slicer before printing.

## Local text/image to 3D

Enter a description or load an image to prepare a 2D concept. Select the visual style, review the generated concept, and approve it before starting 3D generation. The local models are general-purpose image and shape generators: prompts and model outputs can vary, and a chosen style or subject count cannot guarantee exact results. Generate another variation or edit the description when needed.

## Source development

Requires Node.js and npm. To launch the application from source:

```sh
npm install
node node_modules/electron/install.js
npm run build
npm start
```

To create a Windows desktop package, run `npm run package:desktop`.

## AI model licenses

Each model is downloaded from its publisher's repository at a pinned revision and verified during installation. Model weights are not included in this repository. Check each model's repository for its license and usage conditions before installing it.
