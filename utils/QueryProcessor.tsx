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

  function findLargestNumber(query: string): string | null {
    if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
      const numbers = query.match(/\d+/g);
  
      if (numbers && numbers.length >= 2) {
        const largestNumber = Math.max(...numbers.map(Number));
        return largestNumber.toString(); 
      }
    }
  
    return null;
  }

  return "";
}
