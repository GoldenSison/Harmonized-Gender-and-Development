<template>
  <div class="px-5">
    <Preface class="my-5" id="preface"/>
    <Message class="my-5" id="message"/>
    <Acknowledgment id="acknowledgement"/>
    <Objective/>
  </div>
</template>
<script>
import Message from '../components/Content/Message'
import Acknowledgment from '../components/Content/Acknowledgement'
import Preface from '../components/Content/Preface'
import Objective from '../components/Content/Background/Objectives'
export default {
  components:{
    Message,
    Preface,
    Acknowledgment,
    Objective
  },
}
</script>