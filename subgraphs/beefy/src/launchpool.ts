import {
     RewardAdded as RewardTokenEvent
  } from "../generated/Launchpool/LaunchPool"
import { RewardToken } from "../generated/schema"

  export function handleRewardToken(event: RewardTokenEvent): void {
    let entity = new RewardToken(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.from = event.params.from
    entity.to = event.params.to
    entity.value = event.params.value
    entity.save()
  }