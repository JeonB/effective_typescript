"string".charAt(0); // string은 기본형이라 메서드를 호출할 수 없음. 하지만, 이 경우에는 String 래퍼 객체로 변환되어 메서드를 호출할 수 있음. 이후 변환된 객체는 버려짐.

function getStringLen(foo: String) {
  return foo.length;
}

getStringLen("Hello, world!"); // 정상
getStringLen(new String("Hello, world!")); // 정상

// string은 String에 할당할 수 있지만, String은 string에 할당할 수 없음.
function isGreeting(phrase: String) {
  return ["hello", "hi", "good morning"].includes(phrase);
}
