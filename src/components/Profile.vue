<template lang= "html">
    <section class="section">
        <div class="columns" id="data">
          <div class="column is-2 is-hidden-mobile"></div>
            <div class="column is-8 box">
              <div class="columns">
                <div class="container column is-5">
                  <figure class="image is-1by1">
                       <img class="profile" src="../assets/MyProfile.jpg">
                  </figure>
                </div>
              <div class="column is-2">
                <ul>
                    <li class="detail headline" v-for="headline in headlines" >{{ headline.head }} :</li>
                </ul>
             </div>
             <div class="column is-5">
                <ul>
                    <li class="detail" v-for="information in informations">{{ information.data }}</li>
                </ul>
             </div>
            </div>
        </div>
        <div class="column is-2 is-hidden-mobile"></div>
    </div>
   </section>
</template>

<script>
export default {
  data () {
    return {
      headlines: [
          { head: 'Firstname' },
          { head: 'Lastname' },
          { head: 'Nickname' },
          { head: 'Sex' },
          { head: 'Birthday' },
          { head: 'Nationality' },
          { head: 'Religion' },
          { head: 'Hobbies' },
          { head: 'Sports' }
      ],
      informations: [
          { data: 'Jirayut' },
          { data: 'Leeupathumvong' },
          { data: 'Thung' },
          { data: 'Male' },
          { data: '18 January 1997' },
          { data: 'Thailand' },
          { data: 'Buddhist' },
          { data: 'Photographer, Graphic designer' },
          { data: 'Swimming' }
      ]
    }
  }
}
</script>

<style>
.profile {
    padding: 30px;
    border-radius: 50%;
    align-items: center;
    display: flex;
  flex-direction: column;
  justify-content: center;
}
.detail {
    margin: 20px;
    margin-left: 0px;
    text-align: left;
}

.detail.headline {
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: right;
    font-weight: bold;
}

</style>
