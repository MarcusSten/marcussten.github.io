<template>
  <v-dialog
          v-model="dialog"
          max-width="450px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="teal"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              ADD CATEGORY
              <v-icon dark small>
              mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-text-field
                  v-model="addCategory"
                  label="add category"
                ></v-text-field>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red accent-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="teal"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
export default {
  name: "AddCategory",
  data(){
    return {
      category: '',
      dialog: false,
    }
  },
  methods: {
    addCategory() {
      this.$store.commit("addCategoryToList", this.category);
      this.$emit('close')
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      this.$store.commit("addCategoryToList", this.category);
      this.$emit('close')
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  }
};
</script>

<style></style>