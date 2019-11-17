<template>
    <div id="listView">
        <historicComponent></historicComponent>
        <listComponent></listComponent>
    </div>
</template>

<script>
import listComponent from './../components/listComponent';
import historicComponent from '../components/historicComponent'

export default {
    components: {
        listComponent,
        historicComponent
    }
}
</script>