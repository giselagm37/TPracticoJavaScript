
        function agregarElemento() {
            var nuevoElemento = document.getElementById("nuevoElemento").value;
            var select = document.getElementById("selectElement");
            var option = document.createElement("option");
            option.text = nuevoElemento;
            option.value = nuevoElemento;
            select.add(option);
            document.getElementById("nuevoElemento").value = "";
        }

        function modificarElemento() {
            var elementoExistente = document.getElementById("elementoExistente").value;
            var select = document.getElementById("selectElement");
            var selectedIndex = select.selectedIndex;
            if (selectedIndex !== -1) {
                select.options[selectedIndex].text = elementoExistente;
                select.options[selectedIndex].value = elementoExistente;
                document.getElementById("elementoExistente").value = "";
            }
        }

        function eliminarElemento() {
            var elementoAEliminar = document.getElementById("elementoAEliminar");
            elementoAEliminar.remove(elementoAEliminar.selectedIndex);
        }