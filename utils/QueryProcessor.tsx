export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "hmkhalif"
    );
  }

    if (query.toLowerCase().includes("name")) {
    return (
      "alanoudandHAYA"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multipleMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multipleMatch) {
    const x: number = parseInt(multipleMatch[1]);
    const y: number = parseInt(multipleMatch[2]);
    return (x*y).toString();
  }

  if (query.includes("Which of the following numbers is the largest")) {
    var number = query.split(": ")[1].replace('?', "");
    var numbers = number.split(", ")
    var max = 0;
    for (let i = 0; i < 3; i++){
      if (parseInt(numbers[i]) > max){
        max = parseInt(numbers[i])
      }
    }
    return max.toString();
  }
  
  return "";
}
