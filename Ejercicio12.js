
        function agregarElemento() {
            var nuevoElemento = document.getElementById("nuevoElemento").value;
            var select = document.getElementById("item");
            var element = document.getElementById("elementoAEliminar");
           
            // Crear un nuevo elemento de opción para el select
            var optionSelect = document.createElement("option");
            optionSelect.text = nuevoElemento;
            optionSelect.value = nuevoElemento;
        
            // Crear un nuevo elemento de opción para el elemento a eliminar
            var optionElement = document.createElement("option");
            optionElement.text = nuevoElemento;
            optionElement.value = nuevoElemento;
            
            // Agregar los elementos de opción a los elementos correspondientes
            document.getElementById("nuevoElemento").value = "";
            select.add(optionSelect);
            element.add(optionElement);}
        

        function modificarElemento() {
            var elementoExistente = document.getElementById("elementoExistente").value;
            var select = document.getElementById("item");
            var selectEliminar = document.getElementById("elementoAEliminar");
            var selectedIndex = select.selectedIndex;
            if (elementoExistente !='') {
                select.options[selectedIndex].text = elementoExistente;
                select.options[selectedIndex].value = elementoExistente;
                selectEliminar.options[selectedIndex].text = elementoExistente;
                selectEliminar.options[selectedIndex].value = elementoExistente;
                document.getElementById("elementoExistente").value = "";
            }else{
                alert("Llenar el campo a modificar")
            }
        }

        function eliminarElemento() {
            var elementoAEliminar = document.getElementById("elementoAEliminar");
            var elementoAEliminarselec = document.getElementById("item");
            if (elementoAEliminarselec !== -1) {
            elementoAEliminar.remove(elementoAEliminarselec.selectedIndex);
            elementoAEliminarselec.remove(elementoAEliminarselec.selectedIndex);
        }}