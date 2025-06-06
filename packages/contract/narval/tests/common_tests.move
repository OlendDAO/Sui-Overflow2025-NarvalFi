#[test_only]
module narval::common_tests;

use std::ascii::String;

// use sui::balance::Balance;
use sui::clock::{Self, Clock};

use sui::test_scenario::{Self as ts, Scenario};

use narval::account_ds::{Self, AccountRegistry};
use narval::account;
use narval::liquidity::{Self, LiquidityLayer};
// use narval::lending_protocol::LendingProtocol;
use narval::admin::AdminCap;
use narval::ytbtc;
use narval::ytsui;

/// Coins for testing
public struct TBTC has drop { }

public struct TETH has drop { }

public struct TUSD has drop { }

public struct TSUI has drop { }

public struct NBTC has drop { } 

public struct NETH has drop { }

public struct NUSD has drop { }

public struct NSUI has drop { }

public struct LP_BTC has drop { }

public struct LP_ETH has drop { }

public struct LP_USD has drop { }

public struct LP_SUI has drop { }

/// Alice address for testing
public fun alice(): address {
    @0x619640c96ee005ca6fa7530006b34358f1e638a386071ce229bb99db9486962d
}

/// Bob address for testing
public fun bob(): address {
    @0xdae2f56afc119ebddf5ca4ba80cd8a42fced9a74a7bb139c2bf6d0f3a77c497a
}

public fun create_clock_and_share(sc: &mut Scenario) {
    let clock = clock::create_for_testing(sc.ctx());
    
    clock.share_for_testing();
}

public fun increase_clock_for_testing(
    sc: &mut Scenario,
    seconds: u64,
    sender: address,
) {
    sc.next_tx(sender);
    let mut clock = sc.take_shared<Clock>();
    clock.increment_for_testing(seconds * 1000);
    ts::return_shared(clock);
}

public fun clock_timestamp_ms(sc: &mut Scenario): u64 {
    let clock = sc.take_shared<Clock>();
    let timestamp = clock.timestamp_ms();
    ts::return_shared(clock);
    
    timestamp
}

/// Init ytbtc and ytsui for testing
public fun init_ytbtc_and_ytsui_for_testing(sc: &mut Scenario, sender: address) {
    sc.next_tx(sender);
    ytbtc::init_for_testing(sc.ctx());
    ytsui::init_for_testing(sc.ctx());
}

/// Register a user to the registry
public fun register_user_for_testing(
    sc: &mut Scenario,
    name: Option<String>,
    sender: address,
): ID {
    sc.next_tx(sender);

    let mut registry = sc.take_shared<AccountRegistry>();
    let clock = sc.take_shared<Clock>();

    let account_id = account_ds::create_account_and_register(&mut registry, name, &clock, sc.ctx());

    ts::return_shared(registry);
    ts::return_shared(clock);
    account_id
}

// initialize a new LiquidityLayer for testing
public fun init_liquidity_layer_for_testing(sc: &mut Scenario, sender: address) {
    sc.next_tx(sender);

    liquidity::init_for_testing(sc.ctx());
}

// Initialize a new AccountRegistry for testing
public fun init_account_registry_for_testing(sc: &mut Scenario, sender: address) {
    sc.next_tx(sender);

    account::init_for_testing(sc.ctx());
}

// Register an asset vault in LiquidityLayer for testing
public fun register_asset_vault_for_testing<T>(sc: &mut Scenario, sender: address) {
    sc.next_tx(sender);
    let mut layer = sc.take_shared<LiquidityLayer>();
    let admin_cap = sc.take_from_sender<AdminCap>();
    let vault_cap = liquidity::register_vault_by_admin_cap<T>(&mut layer, &admin_cap, sc.ctx());

    ts::return_shared(layer);
    sc.return_to_sender(admin_cap);
    
    transfer::public_transfer(vault_cap, sender);
}
