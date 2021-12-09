<template>
  <q-dialog :model-value="isDialogOpen">
    <q-card>
      <q-card-section>
        It is my custom dialog which should be tested
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomDialog',
  data(){
    return {
      isDialogOpen: false,
    }
  }
})
</script>
