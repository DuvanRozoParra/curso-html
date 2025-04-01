# 📋 GUÍA PARA CONSTRUIR EL FORMULARIO DE LOGIN

Implementa este documento HTML cumpliendo con los requisitos técnicos para pasar las pruebas de Vitest.

- para iniciar el testing ingresa en la terminal

```powershell
npm run test:start
```

- para visualizar el proyecto

```powershell
npm run dev
```

## Nota: recuerda tener instalado Node.

## 🎯 OBJETIVOS PRINCIPALES

### 1. 📌 CONFIGURAR EL TÍTULO

- **Acción requerida:**  
  Establecer el texto del título en la pestaña del navegador como **"Login"**.
- **Ubicación:**  
  Dentro de la sección `<head>` del documento.

---

### 2. 🏷️ CREAR ENCABEZADO VISIBLE

- **Elemento a usar:**  
  Cabecera de primer nivel (`<h1>`)
- **Características especiales:**
  - Identificador único: `main-header`
  - Texto a mostrar: **"Bienvenido"**
- **Posicionamiento:**  
  En el cuerpo principal del documento (`<body>`)

---

### 3. 📝 DISEÑAR FORMULARIO DE ACCESO

**Estructura base requerida:**  
Contenedor de formulario con:

- Identificador: `contact`
- Método de envío: POST
- Destino de envío: `/submit`

#### 🔑 SECCIÓN PARA CORREO ELECTRÓNICO

- **Etiqueta descriptiva:**

  - Relacionada con campo mediante `for="email"`
  - Texto visible: "Correo electrónico:"

- **Campo de entrada:**
  - Tipo: email
  - Identificador: `email`
  - Nombre técnico: `email`
  - Texto guía: "ejemplo@correo.com"
  - Validación obligatoria: activada

#### 🔒 SECCIÓN PARA CONTRASEÑA

- **Etiqueta descriptiva:**

  - Vinculada mediante `for="password"`
  - Texto visible: "Contraseña:"

- **Campo de entrada:**
  - Tipo: password
  - Identificador: `password`
  - Nombre técnico: `password`
  - Marcador de posición: "••••••••"
  - Validación obligatoria: activada

#### 📤 BOTÓN DE INTERACCIÓN

- **Tipo de botón:**  
  Enviador de formulario (submit)
- **Texto visible:**  
  "Enviar"

---

## ✅ LISTA DE VERIFICACIÓN FINAL

1. Encabezado principal con identificador correcto
2. Formulario con parámetros de envío configurados
3. Campos de email y contraseña con:
   - Labels vinculados correctamente
   - Placeholders visibles
   - Atributo required activado
4. Botón de tipo submit con texto adecuado

🚀 **Consejo profesional:**  
Usa herramientas de desarrollo del navegador para verificar:

- Relaciones label/input
- Atributos requeridos
- Estructura jerárquica del DOM

¡Con estos elementos en su lugar, tu formulario pasará todas las validaciones! 🎉
