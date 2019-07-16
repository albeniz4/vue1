<template>
  <div id="location">
    <h1>{{smallName}}</h1>
    <ul>
      <li>{{largeName}}</li>
      <li class="on">{{smallName}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Location",
  data() {
    return {
      largeName: "",
      smallName: ""
    };
  },
  mounted() {
    console.log(this.largeIdx);
    axios.get("menu.json").then(result => {
      for (let row of result.data) {
        if (row.idx == this.largeIdx) {
          this.largeName = row.name;

          for (let subRow of row.sub) {
            if (subRow.idx == this.smallIdx) {
              this.smallName = subRow.name;
              break;
            }
          }
          break;
        }
      }
    });
  },
  props: {
    largeIdx: Number,
    smallIdx: Number
  }
};
</script>
