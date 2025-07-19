const printTreeByLevels = function (root) {
  if (!root) return;

  const spacing = 4;

  // קבלת גובה העץ
  function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.leftChild), getHeight(node.rightChild));
  }

  const height = getHeight(root);
  const width = Math.pow(2, height) * spacing;

  const levels = [];
  const queue = [{ node: root, pos: width / 2, level: 0 }];

  while (queue.length > 0) {
    const { node, pos, level } = queue.shift();
    if (!levels[level]) levels[level] = [];
    levels[level].push({ val: node.value, pos });

    if (node.leftChild)
      queue.push({
        node: node.leftChild,
        pos: pos - width / Math.pow(2, level + 2),
        level: level + 1,
      });
    if (node.rightChild)
      queue.push({
        node: node.rightChild,
        pos: pos + width / Math.pow(2, level + 2),
        level: level + 1,
      });
  }

  // הדפסה שורה שורה עם רווחים מתאימים
  for (const level of levels) {
    let line = "";
    let cursor = 0;
    for (const { val, pos } of level) {
      const space = Math.floor(pos - cursor);
      line += " ".repeat(space) + val;
      cursor = pos + String(val).length;
    }
    console.log(line);
  }
};

module.exports = { printTreeByLevels };
