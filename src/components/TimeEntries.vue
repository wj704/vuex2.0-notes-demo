<template>
  <div>
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn create-plan">
      创建
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>新的计划</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划(┬＿┬)，快去创建吧ヽ(●-`Д´-)ノ</strong></p>

      <div class="list-group">
        <a class="list-group-item" v-for="(plan,index) in plans">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.avatar" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <p class="list-group-item-text total-time">
                <span class="glyphicon glyphicon-time">计划总时间：</span>
                {{ plan.totalTime }}
              </p>
              <p class="label label-primary text-center">
                <span class="glyphicon glyphicon-calendar">开始时间：</span>
                {{ plan.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>备注信息：{{ plan.comment }}</p>
            </div>
              <button
                class="btn btn-xs delete-button"
                @click="deletePlan(index)">
              X
              </button>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name : 'TimeEntries',
        computed : {
          plans () {
            return this.$store.state.list
          }
        },
        methods : {
          deletePlan(idx) {
            // 减去总时间
            this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
            // 删除该计划
            this.$store.dispatch('deletePlan',idx)
          }
        }
    }
</script>
