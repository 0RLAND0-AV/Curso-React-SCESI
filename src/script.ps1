# Script para mostrar el contenido de COMPONENTES UI
# Fase 3: Button, ProjectCard, CertificateCard, ContactForm, ThemeToggle

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "FASE 3: COMPONENTES UI (FINAL)" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# Funcion para mostrar contenido de archivo
function Show-FileContent {
    param(
        [string]$FilePath,
        [string]$Description
    )
    
    if (Test-Path $FilePath) {
        Write-Host "-----------------------------------------------" -ForegroundColor Yellow
        Write-Host "Archivo: $Description" -ForegroundColor Green
        Write-Host "Ruta: $FilePath" -ForegroundColor Gray
        Write-Host "-----------------------------------------------" -ForegroundColor Yellow
        Get-Content $FilePath
        Write-Host ""
        Write-Host ""
    } else {
        Write-Host "ADVERTENCIA: Archivo no encontrado: $FilePath" -ForegroundColor Red
        Write-Host ""
    }
}

# 1. BUTTON
Write-Host ""
Write-Host "===== 1. BUTTON (Boton reutilizable) =====" -ForegroundColor Magenta
Show-FileContent -FilePath ".\components\ui\Button.tsx" -Description "BUTTON.TSX"
Show-FileContent -FilePath ".\styles\components\ui\Button.css" -Description "BUTTON.CSS"

# 2. PROJECT CARD
Write-Host ""
Write-Host "===== 2. PROJECT CARD (Tarjeta de proyecto) =====" -ForegroundColor Magenta
Show-FileContent -FilePath ".\components\ui\ProjectCard.tsx" -Description "PROJECTCARD.TSX"
Show-FileContent -FilePath ".\styles\components\ui\ProjectCard.css" -Description "PROJECTCARD.CSS"

# 3. CERTIFICATE CARD
Write-Host ""
Write-Host "===== 3. CERTIFICATE CARD (Tarjeta de certificado) =====" -ForegroundColor Magenta
Show-FileContent -FilePath ".\components\ui\CertificateCard.tsx" -Description "CERTIFICATECARD.TSX"
Show-FileContent -FilePath ".\styles\components\ui\CertificateCard.css" -Description "CERTIFICATECARD.CSS"

# 4. CONTACT FORM
Write-Host ""
Write-Host "===== 4. CONTACT FORM (Formulario de contacto) =====" -ForegroundColor Magenta
Show-FileContent -FilePath ".\components\ui\ContactForm.tsx" -Description "CONTACTFORM.TSX"
Show-FileContent -FilePath ".\styles\components\ui\ContactForm.css" -Description "CONTACTFORM.CSS"

# 5. THEME TOGGLE
Write-Host ""
Write-Host "===== 5. THEME TOGGLE (Cambio de tema) =====" -ForegroundColor Magenta
Show-FileContent -FilePath ".\components\ui\ThemeToggle.tsx" -Description "THEMETOGGLE.TSX"
Show-FileContent -FilePath ".\styles\components\ui\ThemeToggle.css" -Description "THEMETOGGLE.CSS"

Write-Host ""
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "ANALISIS COMPLETADO - FASE FINAL" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Cyan

Write-Host ""
Write-Host "RESUMEN DE ARCHIVOS ANALIZADOS:" -ForegroundColor Yellow
Write-Host "   1. Button.tsx + Button.css"
Write-Host "   2. ProjectCard.tsx + ProjectCard.css"
Write-Host "   3. CertificateCard.tsx + CertificateCard.css"
Write-Host "   4. ContactForm.tsx + ContactForm.css"
Write-Host "   5. ThemeToggle.tsx + ThemeToggle.css"

Write-Host ""
Write-Host "PROXIMOS PASOS:" -ForegroundColor Cyan
Write-Host "   - Aplicar todos los estilos CSS creados"
Write-Host "   - Descomentar las importaciones en los componentes"
Write-Host "   - Probar la aplicacion completa"
Write-Host "   - Ajustar detalles finales"
Write-Host ""