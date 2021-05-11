var gdjs;
(function(gdjs2) {
  class Profiler {
    constructor() {
      this._framesMeasures = [];
      this._currentFrameIndex = 0;
<<<<<<< HEAD
      this._currentFrameMeasure = {
        parent: null,
        time: 0,
        lastStartTime: 0,
        subsections: {}
      };
=======
      this._currentFrameMeasure = null;
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
      this._currentSection = null;
      this._maxFramesCount = 600;
      this._framesCount = 0;
      while (this._framesMeasures.length < this._maxFramesCount) {
<<<<<<< HEAD
        this._framesMeasures.push({
          parent: null,
          time: 0,
          lastStartTime: 0,
          subsections: {}
        });
=======
        this._framesMeasures.push({parent: null, time: 0, subsections: {}});
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
      }
      this._getTimeNow = window.performance && typeof window.performance.now === "function" ? window.performance.now.bind(window.performance) : Date.now;
    }
    beginFrame() {
      this._currentFrameMeasure = {
        parent: null,
        time: 0,
        lastStartTime: this._getTimeNow(),
        subsections: {}
      };
      this._currentSection = this._currentFrameMeasure;
    }
    begin(sectionName) {
<<<<<<< HEAD
      if (this._currentSection === null)
        throw new Error("Impossible to call Profiler.begin() when not profiling a frame!");
=======
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
      const subsections = this._currentSection.subsections;
      const subsection = subsections[sectionName] = subsections[sectionName] || {
        parent: this._currentSection,
        time: 0,
        lastStartTime: 0,
        subsections: {}
      };
      this._currentSection = subsection;
      this._currentSection.lastStartTime = this._getTimeNow();
    }
    end(sectionName) {
<<<<<<< HEAD
      if (this._currentSection === null)
        throw new Error("Impossible to call Profiler.end() when not profiling a frame!");
      const sectionTime = this._getTimeNow() - this._currentSection.lastStartTime;
      this._currentSection.time = (this._currentSection.time || 0) + sectionTime;
      if (this._currentSection.parent !== null)
        this._currentSection = this._currentSection.parent;
    }
    endFrame() {
      if (this._currentSection === null)
        throw new Error("Impossible to end profiling a frame when profiling has not started a frame!");
=======
      const sectionTime = this._getTimeNow() - this._currentSection.lastStartTime;
      this._currentSection.time = (this._currentSection.time || 0) + sectionTime;
      this._currentSection = this._currentSection.parent;
    }
    endFrame() {
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
      if (this._currentSection.parent !== null) {
        throw new Error("Mismatch in profiler, endFrame should be called on root section");
      }
      this.end();
      this._framesCount++;
      if (this._framesCount > this._maxFramesCount) {
        this._framesCount = this._maxFramesCount;
      }
      this._framesMeasures[this._currentFrameIndex] = this._currentFrameMeasure;
      this._currentFrameIndex++;
      if (this._currentFrameIndex >= this._maxFramesCount) {
        this._currentFrameIndex = 0;
      }
    }
    static _addAverageSectionTimes(section, destinationSection, totalCount, i) {
      destinationSection.time = (destinationSection.time || 0) + section.time / totalCount;
      for (const sectionName in section.subsections) {
        if (section.subsections.hasOwnProperty(sectionName)) {
          const destinationSubsections = destinationSection.subsections;
          const destinationSubsection = destinationSubsections[sectionName] = destinationSubsections[sectionName] || {
            parent: destinationSection,
            time: 0,
            subsections: {}
          };
          Profiler._addAverageSectionTimes(section.subsections[sectionName], destinationSubsection, totalCount, i);
        }
      }
    }
    getFramesAverageMeasures() {
<<<<<<< HEAD
      const framesAverageMeasures = {
        parent: null,
        time: 0,
        lastStartTime: 0,
        subsections: {}
      };
=======
      const framesAverageMeasures = {parent: null, time: 0, subsections: {}};
>>>>>>> a61f6a68f091d03051f92778d1236a3b9c670ce5
      for (let i = 0; i < this._framesCount; ++i) {
        Profiler._addAverageSectionTimes(this._framesMeasures[i], framesAverageMeasures, this._framesCount, i);
      }
      return framesAverageMeasures;
    }
    getStats() {
      return {framesCount: this._framesCount};
    }
    static getProfilerSectionTexts(sectionName, profilerSection, outputs) {
      const percent = profilerSection.parent && profilerSection.parent.time !== 0 ? (profilerSection.time / profilerSection.parent.time * 100).toFixed(1) : "100%";
      const time = profilerSection.time.toFixed(2);
      outputs.push(sectionName + ": " + time + "ms (" + percent + ")");
      const subsectionsOutputs = [];
      for (const subsectionName in profilerSection.subsections) {
        if (profilerSection.subsections.hasOwnProperty(subsectionName)) {
          Profiler.getProfilerSectionTexts(subsectionName, profilerSection.subsections[subsectionName], subsectionsOutputs);
        }
      }
      outputs.push.apply(outputs, subsectionsOutputs);
    }
  }
  gdjs2.Profiler = Profiler;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=profiler.js.map
