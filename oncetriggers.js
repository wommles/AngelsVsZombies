var gdjs;
(function(gdjs2) {
  class OnceTriggers {
    constructor() {
      this._onceTriggers = {};
      this._lastFrameOnceTrigger = {};
    }
    startNewFrame() {
<<<<<<< HEAD
      for (const k in this._lastFrameOnceTrigger)
        if (this._lastFrameOnceTrigger.hasOwnProperty(k))
          delete this._lastFrameOnceTrigger[k];
=======
      this._clearObject(this._lastFrameOnceTrigger);
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
      for (const k in this._onceTriggers) {
        if (this._onceTriggers.hasOwnProperty(k)) {
          this._lastFrameOnceTrigger[k] = this._onceTriggers[k];
          delete this._onceTriggers[k];
        }
      }
    }
    triggerOnce(triggerId) {
      this._onceTriggers[triggerId] = true;
      return !this._lastFrameOnceTrigger.hasOwnProperty(triggerId);
    }
<<<<<<< HEAD
=======
    _clearObject(obj) {
      for (const k in obj) {
        if (obj.hasOwnProperty(k)) {
          delete obj[k];
        }
      }
    }
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
  }
  gdjs2.OnceTriggers = OnceTriggers;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=oncetriggers.js.map
