const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

async function convertToWebP() {
    try {
        // Get all image files from public directory and its subdirectories
        const files = await glob('public/**/*.{jpg,jpeg,png}', { ignore: ['node_modules/**'] });
        
        console.log('Found files:', files); // Debug log
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const webpPath = file.replace(ext, '.webp');
                
                // Convert image to WebP
                await sharp(file)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
                
                console.log(`Converted ${file} to ${webpPath}`);
                
                // Delete original file
                await fs.unlink(file);
                console.log(`Deleted original file: ${file}`);
            }
        }
    } catch (error) {
        console.error('Error converting images:', error);
    }
}

convertToWebP(); 