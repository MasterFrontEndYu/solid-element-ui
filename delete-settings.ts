import { rmSync, readdirSync, statSync, existsSync } from "fs";
import { join, resolve } from "path";

/**
 * 批量删除指定文件夹下的 setting.ts 文件
 * @param targetDir - 要搜索的目录路径
 * @param excludeDirs - 要排除的目录名数组
 */
function deleteSettingFiles(
    targetDir: string,
    excludeDirs: string[] = ["ui/src"]
): void {
    const absolutePath = resolve(targetDir);

    if (!existsSync(absolutePath)) {
        console.log(`❌ 目录不存在: ${absolutePath}`);
        return;
    }

    let deletedCount = 0;

    // 递归遍历目录
    function traverseDir(currentPath: string): void {
        const items = readdirSync(currentPath, { withFileTypes: true });

        for (const item of items) {
            const fullPath = join(currentPath, item.name);

            if (item.isDirectory()) {
                // 跳过排除的目录
                if (!excludeDirs.includes(item.name)) {
                    traverseDir(fullPath);
                }
            } else if (item.isFile() && item.name === "setting.ts") {
                try {
                    rmSync(fullPath);
                    console.log(`✅ 已删除: ${fullPath}`);
                    deletedCount++;
                } catch (error) {
                    console.log(`❌ 删除失败 ${fullPath}:`, error);
                }
            }
        }
    }

    console.log(`🔍 开始扫描目录: ${absolutePath}`);
    traverseDir(absolutePath);

    if (deletedCount === 0) {
        console.log("ℹ️  未找到 setting.ts 文件");
    } else {
        console.log(`🎉 删除完成，共删除 ${deletedCount} 个 setting.ts 文件`);
    }
}

// 使用示例
// 1. 删除当前目录及其子目录下的所有 setting.ts 文件
deleteSettingFiles(".");

// 2. 删除 src 目录下的 setting.ts 文件
// deleteSettingFiles('./src');

// 3. 删除 components 目录下的 setting.ts 文件，排除 tests 目录
// deleteSettingFiles('./src/components', ['node_modules', '.git', 'tests']);
