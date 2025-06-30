@echo off
echo Clearing browser cache and restarting development server...

REM Kill any existing Vite processes
taskkill /f /im node.exe 2>nul

REM Clear npm cache
npm cache clean --force

REM Remove node_modules/.vite cache
if exist "node_modules\.vite" (
    rmdir /s /q "node_modules\.vite"
    echo Cleared Vite cache
)

REM Remove dist folder if exists
if exist "dist" (
    rmdir /s /q "dist"
    echo Cleared dist folder
)

echo Starting development server with fresh cache...
npm run dev

pause
