import get from 'lodash.get';

const calculate = (stepsData: Array<any>): object => {
  console.log('stepsData', stepsData);
  const eachMonthDay: any = {};
  stepsData.map(step => {
    const { repeat, amount } = step;
    switch (repeat.each) {
      case 'EachMonthDay':
      case 'monthDay': {
        console.log('EachMonthDay | monthDay', step);
        if (!eachMonthDay[repeat.value]) {
          console.log('first 0', eachMonthDay);
          eachMonthDay[repeat.value] = [step];
          console.log('first 1', eachMonthDay);
        } else {
          eachMonthDay[repeat.value].push(step);
        }
      }
    }
  });

  console.log(`eachMonthDay object:`, eachMonthDay);

  let curDay = new Date();

  console.log(`date ${curDay}`);

  const res = new Array(200);
  /*
  weekDay?: number;
  monthDay?: number;
  month?: string | number; // ???
  index: number; // 0 - (+100500)
  date: string; // '31.03.2020';
  events: Array<{
    sum: number; // sum after
    description: string; // 'salary', 'internet'...
    stepProps: StepProps; // step info
  }>;
  */
  const makeObj = ({
    index,
    monthDay,
    month,
    sum,
    description,
  }: object): void => {
    const point = {
      index,
      monthDay,
      month,
      sum,
    };
    const event = {
      sum,
      description: 'sum description',
    };

    if (res[index]) {
      res[index].events = [...res[index].events, event];
    } else {
      res[index] = {
        ...point,
        events: [event],
      };
    }
  };

  const eachMonthDayObject = get(state, 'eachMonthDay', {});
  const eachMonthDayArray = Object.keys(eachMonthDayObject).map(
    (key, index) => {
      console.log(`eachMonthDayObject ${key}`, eachMonthDayObject[key]);
      return eachMonthDayObject[key];
    },
  );

  let s = 155000;
  let done = false;

  for (let i = 0; i < 200; i++) {
    const monthDay = curDay.getDate();
    const weekDay = curDay.getDay();
    const month = curDay.getMonth();
    console.log(`${i} / ${monthDay} ${month}`);

    if (monthDay === 15 || monthDay === 1) {
      // # w
      s += 110000;
      console.log(`${i} / ${monthDay} ${month} || s =+ 135000 | ${s}`);
      res.push(
        makeObj({
          monthDay,
          weekDay,
          month,
          description: 'salary: s += 135000',
          index: i,
          sum: s,
        }),
      );
    }
    if (monthDay === 23) {
      // # flat
      s -= 50000;
      console.log(`${i} / ${monthDay} ${month} || Flat -50.000 | ${s}`);
      res.push(
        makeObj({
          monthDay,
          weekDay,
          month,
          description: 'Flat: s -= 50.000',
          index: i,
          sum: s,
        }),
      );
    }
    if (monthDay === 27) {
      // # inet
      s -= 1500;
      console.log(`${i} / ${monthDay} ${month} || inet -1500 | ${s}`);
    }
    if (monthDay === 1) {
      // # eng
      s -= 5000;
      console.log(`${i} / ${monthDay} ${month} || eng -5.000 | ${s}`);
    }
    if (monthDay === 2) {
      // # food
      s -= 20000;
      console.log(`${i} / ${monthDay} ${month} || food -20.000 | ${s}`);
    }
    if (monthDay === 3) {
      // # fuel
      s -= 10000;
      console.log(`${i} / ${monthDay} ${month} || fuel -10.000 | ${s}`);
    }

    if (s >= 535000 && done === false) {
      // # car
      console.log(`\n DONE !!!!!!!! \n`);
      done = true;
      // s -=  535000;
    }

    if (monthDay === 5) {
      // # vacation
      s -= 30000;
      console.log(`${i} / ${monthDay} ${month} || vacation -30.000 | ${s}`);
    }

    if (i % 365 === 0 && i > 0) {
      // % + bonus
      const add = s * 0.085;
      s += add;
      s += 400000;
      console.log(`${i} / ${monthDay} ${month} || %% +${add} | ${s}`);
    }

    curDay.setDate(curDay.getDate() + 1);
  }

  console.log(`END ${s}`);

  return {
    eachMonthDay,
  };
};

export { calculate };
