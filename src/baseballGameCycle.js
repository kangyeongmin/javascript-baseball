const MissionUtils = require("@woowacourse/mission-utils");
const getRestartOption = require("./getRestartOption");
const getResult = require("./getResult");
const checkInputAvailable = require("./checkInputAvailable");

function baseballGameCycle(randomNumbers) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    const answer = input.split("");
    if (checkInputAvailable(answer)) {
      const result = getResult(randomNumbers, answer);
      MissionUtils.Console.print(result);
      result.length > 10
        ? getRestartOption()
        : baseballGameCycle(randomNumbers);
    } else {
      //throw문 구현
    }
  });
}

module.exports = baseballGameCycle;
