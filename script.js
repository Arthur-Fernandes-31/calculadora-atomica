 const e = 1.602176634e-19; // Carga elementar em Coulombs
        const K = 8.9875517923e9; // Constante de Coulomb

        function calcCharge() {
            const n = parseFloat(document.getElementById('n-electrons').value);
            const Q = n * e;
            document.getElementById('result-charge').innerText = `Q = ${Q.toExponential()} C`;
        }

        function calcForce() {
            const q1 = parseFloat(document.getElementById('q1').value);
            const q2 = parseFloat(document.getElementById('q2').value);
            const d = parseFloat(document.getElementById('distance').value);
            if (d <= 0) {
                document.getElementById('result-force').innerText = 'Distância deve ser maior que zero.';
                return;
            }
            const F = K * (q1 * q2) / (d * d);
            document.getElementById('result-force').innerText = `F = ${F.toExponential()} N`;
        }