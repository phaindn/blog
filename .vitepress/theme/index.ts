import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

export default {
    ...DefaultTheme,
    setup() {
        const { lang } = useData();
        // watch(() => {
        //     if (inBrowser) {
        //         document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`;
        //     }
        // });
    },
};
