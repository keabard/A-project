class XKE {
  field;

  constructor(field){
    this.field = field;
  }

  getter() {
    return this.field;
  }
}

class StoryOneService {
  storyOneArg;

  constructor(storyOneArg) {
    this.storyOneArg = storyOneArg + 1;
  }
}