<template>
  <v-row>
    <Header title="ARMA LAS PALABRAS"/>
     <TableImages :items="letters" cols="2" maxWidth="410"/>

    <div>
      <img :src="uno" class="item">
      <table id="tabla1" class="tablas">
        <tr>
          <td>
            <div class="box-image"> </div>
          </td>
          <td>
            <div class="box-image"></div>
          </td>
          <td>
            <div class="box-image"></div>
          </td>
        </tr>
      </table>
    </div>

  </v-row>
</template>
<script>
import Header from "../../../components/Header/Header";
import {a, ola, l, o, oso, r, u, s, uno} from '../../../helpers/images'
import {olaSound, osoSound, unoSound} from "../../../helpers/sounds";
import TableImages from "../../../components/TableImages/TableImages";
import jquery from ''
export default {
  components: {TableImages, Header},
  mounted() {
    this.createDragAndDrop()
  },
  data() {
    return {
      letters: [
        {
          id: 0,
          title: 'a',
          letter: 'a',
          url: a,
          selected: false,
          sound: ''
        },
        {
          id: 1,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: ''
        },
        {
          id: 2,
          title: 'l',
          letter: 'l',
          url: l,
          selected: false,
          sound: ''
        },
        {
          id: 3,
          title: 'r',
          letter: 'r',
          url: r,
          selected: false,
          sound: ''
        },
        {
          id: 4,
          title: 'u',
          letter: 'u',
          url: u,
          selected: false,
          sound: ''
        },
        {
          id: 5,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: ''
        },
        {
          id: 6,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: ''
        },
        {
          id: 7,
          title: 's',
          letter: 's',
          url: s,
          selected: false,
          sound: ''
        },
        {
          id: 8,
          title: 'o',
          letter: 'o',
          url: o,
          selected: false,
          sound: ''
        },
      ],
      images: [
          {
        id: 0,
        title: 'ola',
        letter: 'o',
        url: ola,
        selected: false,
        sound: olaSound
      },
        {
          id: 2,
          title: 'oso',
          letter: 'o',
          url: oso,
          selected: false,
          sound: osoSound
        },
        {
          id: 1,
          title: 'uno',
          letter: 'u',
          url: uno,
          selected: false,
          sound: unoSound
        }
      ]
    }
  },
  methods:{
    createDragAndDrop(){
      $('.item').draggable({
        helper: 'clone'
      });

      $('.box-image').droppable({
        accept: '.item',
        hoverClass: 'hovering',
        drop: function (ev, ui) {
          ui.draggable.detach();
          $(this).append(ui.draggable);
        }
      });
    }
  }
}
</script>
<style>
.box-image{
  border-bottom: 4px solid blue;
  width: 60px;
  height: 60px;
}
</style>