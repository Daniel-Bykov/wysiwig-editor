<script>

import BaseBtn from "@/components/base/Btn";

export default {
  name: "ModuleWysiwig",
  components: {BaseBtn},

  data() {
    return {
      file: null
    }
  },

  methods: {
    applyHeading() {
      document.execCommand(
          "insertHTML",
          false,
          "<h1>" + document.getSelection() + "</h1>");
    },
    applyParagraph() {
      document.execCommand(
          "insertHTML",
          false,
          "<span class='paragraph'>" + document.getSelection() + "</span>");
    },
    undo() {
      document.execCommand('undo')
    },
    redo() {
      document.execCommand('redo')
    },
    format() {
      this.$refs.editor.querySelectorAll('.paragraph').forEach(item => {
        item.style.display = "block"
      })
    },

    loadMode() {
      const urlUpload = confirm('Вы хотите загрузить изображение с URL-адреса?')
      if (urlUpload) {
        const link = prompt('Введите URL адрес изображения')
        document.execCommand('insertImage', false, link);
      } else {
        const fileUpload = confirm('Вы хотите загрузить изображение c компьютера?')
        if (fileUpload) {
          this.$refs.output.click()
        }
      }
    },
    fileLoad(file) {
      const imageReader = new FileReader();
      imageReader.readAsDataURL(file.target.files[0]);
      imageReader.onload = readerEvent => {
        this.file = readerEvent.target.result;
        file.target.value = ''
        document.execCommand('insertImage', false, this.file);
      }
    },
    copyHTML() {
      const html = this.$refs.editor.innerHTML
      navigator.clipboard.writeText(html).then(() => {
        alert("HTML документа успешно скопирован");
      });
    }
  }
}
</script>

<template>
  <div>
    <!--File Uploader Input-->
    <input
        hidden
        ref="output"
        type="file"
        accept="file"
        @input="fileLoad($event)">

    <!--Editor Controls-->
    <div :class="$style.controls">
      <BaseBtn
          title="Назад"
          icon-name="arrow-left"
          @mousedown.prevent="undo()"/>
      <BaseBtn
          title="Вперед"
          icon-name="arrow-right"
          @mousedown.prevent="redo()"/>
      <BaseBtn
          title="Сделать заголовком"
          icon-name="text"
          @mousedown.prevent="applyHeading()"/>
      <BaseBtn
          title="Сделать абзацем"
          icon-name="text-two"
          @mousedown.prevent="applyParagraph()"/>
      <BaseBtn
          title="Загрузить изображение"
          icon-name="image"
          @mousedown.prevent="loadMode()"/>
      <BaseBtn
          name="image"
          mode='text'
          @mousedown.prevent="copyHTML()">
        Скопировать HTML
      </BaseBtn>
    </div>

    <!--Editor-->
    <div
        ref="editor"
        :class="$style.editor"
        @input="format"
        :contenteditable="true">
      <slot/>
    </div>
  </div>

</template>

<style lang="scss" module>
.controls {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: rem(31);
  gap: rem(12);
}

.editor {
  padding: rem(10);
  border-radius: rem(8);
  text-align: left;
  transition: 0.125s linear;

  &:focus-visible {
    outline: unset;
    box-shadow: var(--base-box-shadow);
  }

  &:hover {
    outline: unset;
    box-shadow: var(--base-box-shadow);
  }

  img {
    max-width: 100%;
    margin-bottom: rem(31);
  }
}


</style>



