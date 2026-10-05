# Wound Care Assessment Dashboard (Angular 20)

Responsive Angular 20 prototype based on the supplied Wound Dashboard screenshot. No Angular Material or other UI library is used.

## Run locally in VS Code

1. Install a current Node.js release supported by Angular 20.
2. Open this folder in VS Code.
3. Open the integrated terminal and run:

```bash
npm install
npm start
```

4. Open `http://localhost:4200`.

## Included
- Standalone, reusable Angular components
- Responsive SCSS matching the prototype
- Statistics cards, quick filters, date filters, resident search
- Active and resolved wound views
- JSON mock data in `src/assets/data/wounds.json`
- Service layer ready to replace with a backend API

## Future API integration
Replace `WoundService.getWounds()` with the production API URL and add create/detail endpoints. The UI intentionally keeps model, service, and presentation concerns separate.
