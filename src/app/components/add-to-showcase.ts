export const showCaseExamples: Map<string, Array<any>> = new Map();

export function AddToShowCase(categoryName: string, fileName: string, description: string) {
  return (type: any) => {
    type.prototype.fileName = fileName;
    type.prototype.description = description;
    const categoryArray = showCaseExamples.get(categoryName);
    if (!categoryArray) {
      const examples = new Array<any>();
      examples.push(type);
      showCaseExamples.set(categoryName, examples);
    } else {
      categoryArray.push(type);
    }
    return type;
  };
}
