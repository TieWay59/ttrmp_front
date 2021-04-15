import Vue from 'vue';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// 按需引入 highlightjs 的语言包，此处以 json 为例
import json from 'highlight.js/lib/languages/json';
import cpp from 'highlight.js/lib/languages/cpp';

VMdEditor.use(githubTheme, {
  extend(md, hljs) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
    // 注册语言包
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('c++', cpp);
  },
});

Vue.use(VMdEditor);

