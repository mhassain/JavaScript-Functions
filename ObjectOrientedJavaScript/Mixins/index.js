// Mixins //
const jsSkill = {
  knowsJS() {
    return true;
  }
};

const engDegree = {
  hasDegree() {
    return true;
  }
};

const backendSkill = {
  knowsBackend() {
    return true;
  }
};

const jsEngineer = Object.assign({}, jsSkill, engDegree);
console.dir(jsEngineer);

const fullStackEngineer = Object.assign({}, jsSkill, engDegree, backendSkill);
console.dir(fullStackEngineer);
