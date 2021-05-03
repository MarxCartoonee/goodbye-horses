class App {
  static segments = {
    hlhm: ['head', 'less', 'horse', 'man'],
    glhf: ['good', 'luck', 'have', 'fun'],
  };
  static titles = {
    hlhm: '🐴👨🕑',
    glhf: 'glhf',
  };
  static clocks = {
    '01:00': '🕐',
    '02:00': '🕑',
    '03:00': '🕒',
    '04:00': '🕓',
    '05:00': '🕔',
    '06:00': '🕕',
    '07:00': '🕖',
    '08:00': '🕗',
    '09:00': '🕘',
    '10:00': '🕙',
    '11:00': '🕚',
    '12:00': '🕛',
    '01:30': '🕜',
    '02:30': '🕝',
    '03:30': '🕞',
    '04:30': '🕟',
    '05:30': '🕠',
    '06:30': '🕡',
    '07:30': '🕢',
    '08:30': '🕣',
    '09:30': '🕤',
    '10:30': '🕥',
    '11:30': '🕦',
    '12:30': '🕧',
  };

  static get mode() {
    const mode = localStorage.getItem('mode');
    return mode || 'hlhm';
  }
  static set mode(mode) {
    localStorage.setItem('mode', mode);
  }

  static get title() {
    return App.titles[App.mode].toLocaleUpperCase();
  }

  static get accurateClock() {
    const accurateClock = localStorage.getItem('accurateClock');
    return accurateClock === 'true' ? true : false;
  }
  static set accurateClock(accurateClock) {
    localStorage.setItem('accurateClock', !!accurateClock);
  }

  static toggleAccurateClock = () => {
    App.accurateClock = !App.accurateClock;
  };

  static get totalInsanity() {
    const totalInsanity = localStorage.getItem('totalInsanity');
    return totalInsanity === 'true' ? true : false;
  }
  static set totalInsanity(totalInsanity) {
    localStorage.setItem('totalInsanity', !!totalInsanity);
  }

  static toggleTotalInsanity = () => {
    App.totalInsanity = !App.totalInsanity;
  };

  static getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  static capitalizeStr = (str) => {
    return str
      .split('')
      .map((v, i) => (i === 0 ? v.toUpperCase() : v))
      .join('');
  };

  static getClock = () => {
    const d = new Date();
    const hours = d.getHours();
    const adjustedHours = hours % 12;
    d.setHours(adjustedHours);
    const minutes = d.getMinutes();
    const adjustedMinutes = minutes < 30 ? 0 : 30;
    d.setMinutes(adjustedMinutes);
    const timeStr = d.toTimeString().slice(0, 5);
    const clock = App.clocks[timeStr];
    return clock;
  };

  static concatName(nameArr, clock) {
    switch (App.mode) {
      case 'hlhm':
        return `${App.capitalizeStr(nameArr[0])}${
          nameArr[1]
        } ${App.capitalizeStr(nameArr[2])}${nameArr[3]} ${clock}`;
      case 'glhf':
        return `${nameArr.map(App.capitalizeStr).join(' ')} ${clock}`;
    }
  }

  static generateName = () => {
    const segs = Array.from(App.segments[App.mode]);
    const length = segs.length;
    let nameArr = [];
    let name = '';
    let k = 0;
    const clocks = Object.values(App.clocks);
    const clock = App.accurateClock
      ? App.getClock()
      : clocks[App.getRandomNumber(0, clocks.length - 1)];

    for (let i = 0; i < length; i++) {
      k = App.getRandomNumber(0, segs.length - 1);
      nameArr.push(segs[k]);
      if (!App.totalInsanity) {
        segs.splice(k, 1);
      }
    }

    name = App.concatName(nameArr, clock);

    return name;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Loading done');
  const title = document.getElementById('title');
  const output = document.getElementById('output');
  const modeSelect = document.getElementById('mode-select');
  const accurateClock = document.getElementById('accurate-clock');
  const totalInsanity = document.getElementById('total-insanity');
  const actuator = document.getElementById('actuator');

  title.innerText = App.title;

  modeSelect.value = App.mode;
  modeSelect.addEventListener('input', ($e) => {
    App.mode = $e.target.value;
    title.innerText = App.title;
  });

  accurateClock.checked = App.accurateClock;
  accurateClock.addEventListener('input', ($e) => {
    App.accurateClock = $e.target.checked;
  });

  totalInsanity.checked = App.totalInsanity;
  totalInsanity.addEventListener('input', ($e) => {
    App.totalInsanity = $e.target.checked;
  });

  actuator.addEventListener('click', () => {
    output.value = App.generateName();
  });
});
