import * as components from './components';
import type { Component, App } from 'vue'

const componentsList: Component | any = components?.default;
const libnov = {
    install(app: App) {
        Object.keys(componentsList).forEach(name => {
            app.component(name, componentsList[name]);
        })
    },
};

export default { libnov }

