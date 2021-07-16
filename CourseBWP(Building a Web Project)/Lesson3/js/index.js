import("../css/style.sass");

import { drawGalleryItem } from './item';
import items from './items';

const galleryElement = document.getElementById('gallery');

items.map(item => galleryElement.appendChild(drawGalleryItem(item)))