import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prependDynamicHeader(dirPath: string) {
  try {
    const files = await fs.promises.readdir(dirPath);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));

    for (const file of mdxFiles) {
      const filePath = path.join(dirPath, file);
      
      // 1. 获取文件名（不带 .mdx 后缀）作为标题
      const fileNameWithoutExt = path.basename(file, '.mdx');
      
      // 2. 格式化标题（可选：比如将 "my-post" 转为 "My Post"）
      // 这里直接使用文件名，或者你可以自定义逻辑
      const displayTitle = fileNameWithoutExt;

      const header = `---
title: ${displayTitle}
description: A reference page in my new Starlight docs site.
---

`;

      // 3. 读取并拼接
      const originalContent = await fs.promises.readFile(filePath, 'utf-8');

      // 简单防重检查：如果文件开头已经是 --- 了，说明可能已经处理过
      if (originalContent.trim().startsWith('---')) {
        console.log(`⚠️ 跳过已存在头部的文档: ${file}`);
        continue;
      }

      const finalContent = header + originalContent;

      await fs.promises.writeFile(filePath, finalContent, 'utf-8');
      console.log(`✅ 已处理: ${file} (Title: ${displayTitle})`);
    }
  } catch (error) {
    console.error('❌ 运行出错:', error);
  }
}

// 确保这里的路径指向你的 Starlight 文档目录
const targetDir = path.resolve(__dirname, '../src/content/docs');
prependDynamicHeader(targetDir);