<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-black text-white" elevated height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            
          </q-avatar>
          Jay sneakers
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Home Page" />
        <q-route-tab to="/page2" label="Kart page" />
        <q-route-tab to="/page3" label="Account" />
      </q-tabs>
    </q-header>

    
    

        
      <q-separator />


    <q-page-container>
      
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="./assets/1.jpg" />
          <q-carousel-slide :name="2" img-src="./assets/2.jpg" />
          <q-carousel-slide :name="3" img-src="./assets/3.jpg" /> 
        </q-carousel>
      </div>
      
      <!-- Tulisan di bawah carousel -->
      <div class="text-center" style="text-transform: capitalize; font-weight: bold; font-size: 45px;">
        All our best seller
      </div>

      <!-- Container untuk kotak-kotak -->
      <div class="q-pa-md row items-start q-gutter-md justify-start">
        <
        <q-card class="my-card" flat bordered style="width: 250px;">
          <q-img
            src="./assets/5.jpg"
            style="width: 100%; height: 100%; object-fit: cover;"
          />

          <q-card-section>
            
            <div class="text-h5 q-mt-sm q-mb-xs">adidas</div>
           
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subtitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>

        <!-- Kotak 2 -->
        <q-card class="my-card" flat bordered style="width: 250px;">
          <q-img
            src="./assets/4.jpg"
            style="width: 100%; height: 100%; object-fit: cover;"
          />

          <q-card-section>
           
            <div class="text-h5 q-mt-sm q-mb-xs">the stone cold</div>
         
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subtitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        
        </q-card>

        <!-- Kotak 3 -->
        <q-card class="my-card" flat bordered style="width: 250px;">
          <q-img
            src="./assets/6.jpg"
            style="width: 100%; height: 100%; object-fit: cover;"
          />

          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs">puma</div>
            
           
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subtitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>

        <!-- Kotak 4 -->
        <q-card class="my-card" flat bordered style="width: 250px;">
          <q-img
            src="./assets/7.jpg"
            style="width: 100%; height: 100%; object-fit: cover;"
          />

          <q-card-section>
           
            <div class="text-h5 q-mt-sm q-mb-xs">Louis vuitton</div>
           
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subtitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>

        </q-card>
        <q-card class="my-card" flat bordered style="width: 250px;">
          <q-img
            src="./assets/8.jpg"
            style="width: 100%; height: 100%; object-fit: cover;"
          />

          <q-card-section>
           
            <div class="text-h5 q-mt-sm q-mb-xs">new balance</div>
           
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subtitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        
        </q-card>
      </div>

        
        
          
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      slide: ref(1),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>