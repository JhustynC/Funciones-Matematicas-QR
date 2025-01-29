// Configurar la calculadora de Desmos
const calculator = Desmos.GraphingCalculator(
    document.getElementById('desmos-container'),
    { expressions: false }
);

// Función para manejar las rutas
function handleRoute() {
    const path = window.location.hash.replace('#', ''); // Obtener la ruta del hash
    switch (path) {
        case 'parabola':
            setupParabola();
            break;
        case 'hiperbole':
            setupHiperbole();
            break;
        case 'cubica':
            setupCubica();
            break;
        default:
            setupDefault();
            break;
    }
}

// Función para configurar una parábola
function setupParabola() {
    document.getElementById('titulo').textContent = 'Parábola Interactiva';
    document.getElementById('controls').innerHTML = `
        <label for="a">Coeficiente a:</label>
        <input type="number" id="a" placeholder="a" step="0.1" value="1">
        <label for="b">Coeficiente b:</label>
        <input type="number" id="b" placeholder="b" step="0.1" value="0">
        <label for="c">Coeficiente c:</label>
        <input type="number" id="c" placeholder="c" step="0.1" value="0">
    `;
    document.getElementById('description').innerHTML = `
        <strong>Instrucciones:</strong><br>
        - Usa los controles para cambiar los valores de <strong>a</strong>, <strong>b</strong> y <strong>c</strong>.<br>
        - <strong>a</strong>: Controla la apertura y dirección de la parábola.<br>
        - <strong>b</strong>: Afecta la inclinación y posición horizontal.<br>
        - <strong>c</strong>: Define la intersección con el eje Y.<br>
    `;

    const updateEquation = () => {
        const a = parseFloat(document.getElementById('a').value) || 0;
        const b = parseFloat(document.getElementById('b').value) || 0;
        const c = parseFloat(document.getElementById('c').value) || 0;
        calculator.setExpression({ id: 'graph', latex: `y = ${a}x^2 + ${b}x + ${c}` });
    };

    ['a', 'b', 'c'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateEquation);
    });

    updateEquation();
}

// Función para configurar una hipérbola
function setupHiperbole() {
    document.getElementById('titulo').textContent = 'Hipérbola Interactiva';
    document.getElementById('controls').innerHTML = `
        <label for="a">Coeficiente a:</label>
        <input type="number" id="a" placeholder="a" step="0.1" value="1">
        <label for="b">Coeficiente b:</label>
        <input type="number" id="b" placeholder="b" step="0.1" value="1">
    `;
    document.getElementById('description').innerHTML = `
        <strong>Instrucciones:</strong><br>
        - Usa los controles para cambiar los valores de <strong>a</strong> y <strong>b</strong>.<br>
        - <strong>a</strong>: Controla la apertura en el eje X.<br>
        - <strong>b</strong>: Controla la apertura en el eje Y.<br>
    `;

    const updateEquation = () => {
        const a = parseFloat(document.getElementById('a').value) || 1;
        const b = parseFloat(document.getElementById('b').value) || 1;
        calculator.setExpression({ id: 'graph', latex: `x^2/${a}^2 - y^2/${b}^2 = 1` });
    };

    ['a', 'b'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateEquation);
    });

    updateEquation();
}

// Función para configurar una cúbica
function setupCubica() {
    document.getElementById('titulo').textContent = 'Función Cúbica Interactiva';
    document.getElementById('controls').innerHTML = `
        <label for="a">Coeficiente a:</label>
        <input type="number" id="a" placeholder="a" step="0.1" value="1">
        <label for="b">Coeficiente b:</label>
        <input type="number" id="b" placeholder="b" step="0.1" value="0">
        <label for="c">Coeficiente c:</label>
        <input type="number" id="c" placeholder="c" step="0.1" value="0">
        <label for="d">Coeficiente d:</label>
        <input type="number" id="d" placeholder="d" step="0.1" value="0">
    `;
    document.getElementById('description').innerHTML = `
        <strong>Instrucciones:</strong><br>
        - Usa los controles para cambiar los valores de <strong>a</strong>, <strong>b</strong>, <strong>c</strong> y <strong>d</strong>.<br>
        - <strong>a</strong>: Controla el término cúbico.<br>
        - <strong>b</strong>: Controla el término cuadrático.<br>
        - <strong>c</strong>: Controla el término lineal.<br>
        - <strong>d</strong>: Define la intersección con el eje Y.<br>
    `;

    const updateEquation = () => {
        const a = parseFloat(document.getElementById('a').value) || 0;
        const b = parseFloat(document.getElementById('b').value) || 0;
        const c = parseFloat(document.getElementById('c').value) || 0;
        const d = parseFloat(document.getElementById('d').value) || 0;
        calculator.setExpression({ id: 'graph', latex: `y = ${a}x^3 + ${b}x^2 + ${c}x + ${d}` });
    };

    ['a', 'b', 'c', 'd'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateEquation);
    });

    updateEquation();
}

// Función por defecto (si la ruta no coincide)
function setupDefault() {
    document.getElementById('titulo').textContent = 'Bienvenido';
    document.getElementById('description').innerHTML = `
        <strong>Instrucciones:</strong><br>
        - Usa la URL para acceder a diferentes gráficas:<br>
        - <strong>#parabola</strong>: Gráfica de una parábola.<br>
        - <strong>#hiperbole</strong>: Gráfica de una hipérbola.<br>
        - <strong>#cubica</strong>: Gráfica de una función cúbica.<br>
    `;
}

// Escuchar cambios en la ruta
window.addEventListener('hashchange', handleRoute);

// Cargar la ruta inicial
handleRoute();