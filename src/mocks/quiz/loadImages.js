const imageImport = import.meta.glob('../../assets/images/quiz/*.png', { eager: true });

export const images = Object.keys(imageImport).reduce((acc, key) => {
    const path = key.replace('../../assets/images/quiz/', '').replace('.png', '');
    acc[path] = imageImport[key].default;
    return acc;
}, {});