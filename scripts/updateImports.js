const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

async function updateImports() {
    try {
        // Get all JavaScript/TypeScript files
        const files = await glob('**/*.{js,jsx,ts,tsx}');
        
        for (const file of files) {
            let content = await fs.readFile(file, 'utf8');
            let modified = false;
            
            // Update imports for jpg/jpeg/png to webp
            const regex = /(['"])(.*?\.(?:jpg|jpeg|png))(['"])/g;
            const newContent = content.replace(regex, (match, quote1, path, quote2) => {
                const newPath = path.replace(/\.(jpg|jpeg|png)$/, '.webp');
                modified = true;
                return `${quote1}${newPath}${quote2}`;
            });
            
            if (modified) {
                await fs.writeFile(file, newContent, 'utf8');
                console.log(`Updated imports in ${file}`);
            }
        }
    } catch (error) {
        console.error('Error updating imports:', error);
    }
}

updateImports(); 