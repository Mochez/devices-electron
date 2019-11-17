<template>
    <div id="detail">
        <historicComponent></historicComponent>
        <detailComponent></detailComponent>
    </div>
</template>

<script>
import detailComponent from '../components/detailComponent';
import historicComponent from '../components/historicComponent'


export default {
    components: {
        detailComponent,
        historicComponent
    }
}
</script>