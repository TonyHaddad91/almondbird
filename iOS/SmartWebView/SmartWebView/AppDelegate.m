//
//  AppDelegate.m
//  SmartWebView
//
//  Created by Essam on 9/22/16.
//  Copyright © 2016 Essam. All rights reserved.
//

#import "AppDelegate.h"
#import "AssetsURLProtocol.h"
#import "DeeplinkingManager.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [NSURLProtocol registerClass:AssetsURLProtocol.class];

    NSURL *deeplinkURL = launchOptions[UIApplicationLaunchOptionsURLKey];
    if (deeplinkURL) {
        [[DeeplinkingManager sharedInstance] handleURL:deeplinkURL];
    }

    return YES;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    if ([[DeeplinkingManager sharedInstance] handleURL:url]) {
        return YES;
    }

    return NO;
}

@end
