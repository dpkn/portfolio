<template>
  <div id="contact">
    <MainNavigation></MainNavigation>
    <div class="container">
      <form method="POST" action="http://home.hku.nl/cgi-bin/FormMail.cgi">
        <input type="hidden" name="recipient" value="daan.korssen@student.hku.nl">
        <input type="hidden" name="subject" value="Feedback van website via formulier">
        <input type="hidden" name="redirect" value="http://studenthome.hku.nl/~iris.schuit/contact/send">
        <input type="hidden" name="required" value="email,realname">

        Email: <br> <input type="text" name="email" size="32" maxlength="40"><br>
        Naam: <br><input type="text" name="realname" size="32" maxlength="32"><br>
        Opmerkingen: <br><textarea name="opm" rows="3" cols="40">Verdere opmerkingen: </textarea><br>
        <input type="submit" value="Verstuur mijn aanvraag">
      </form>
    </div>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  name: 'Contact',
  components: {
    MainNavigation,
  },
};
</script>
