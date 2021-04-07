<template>
  <div class="guidelines">
    <Preface class="my-2" id="preface"/>
    <Message class="my-2" id="message"/>
    <Acknowledgment id="acknowledgement"/>
  </div>
</template>
<script>
import Message from '../components/Content/Message'
import Acknowledgment from '../components/Content/Acknowledgement'
import Preface from '../components/Content/Preface'
export default {
  components:{
    Message,
    Preface,
    Acknowledgment
  },
}
</script>