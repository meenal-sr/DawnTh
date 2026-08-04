//global imports here
import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
import getAllSpecs from './test';
import headerButton from './header';
//lazyload image dependencies
// lazysizes.cfg.loadMode = 1; //init lazyload


document.addEventListener('DOMContentLoaded', () => {
    // getAllSpecs();
    headerButton();
    
})