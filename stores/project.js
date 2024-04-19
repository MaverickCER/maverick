export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    project: '',
  }),
  actions: {
    open(project) {
      this.project = project;
      const element = document.getElementById('__nuxt');
      element.className = 'project' + project;
      element.style.setProperty('--progress-width', `0%`);
      document.body.style.overflowY = "hidden";
    },
    close() {
      this.project = '';
      const element = document.getElementById('__nuxt');
      element.className = 'projects';
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      element.style.setProperty('--progress-width', `${scrolled}%`);
      document.body.style.overflowY = "auto";
      setTimeout(() => {
        const element = document.querySelector('aside');
        element.scrollTo({ top: 0, left: 0 });
      }, 500);
    }
  }
})
