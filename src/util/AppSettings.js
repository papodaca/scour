class AppSettings {
  consructor(storageKey = "AppSettings") {
    if (typeof storageKey !== "undefined") {
      this.STORAGE_KEY = storageKey;
    }
    const rawValue = localStorage.getItem(this.STORAGE_KEY);
    this.data = typeof rawValue !== "undefined" ? JSON.parse(rawValue) : {};
  }

  getAll() {
    return this.data;
  }

  get(field) {
    return this.data[field];
  }

  set(field, value) {
    this.data[field] = value;
    this.save();
  }

  save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
  }

  addProject(project) {
    if (Array.isArray(this.data.projects)) {
      this.data.projects.push(project);
    } else {
      this.data.projects = [project];
    }
    this.save();
  }
}

export default AppSettings;
