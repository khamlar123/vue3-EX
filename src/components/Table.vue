<script setup lang="ts">
</script>


<template >
  <div class="table-wrapper">
    <div class="search-wrapper">
      <input type="search" />
      <div class="table-row">
        <input  type="number" />
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
          <th>action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>khamlar chanthavong</td>
          <td>02078387878</td>
          <td>mr.khamlarchanthavong@mail.com</td>
          <td>
            <div class="action">
              <button class="btn-add" >Detail</button>
            </div>

          </td>

        </tr>
      </tbody>
    </table>

  </div>
</template>






