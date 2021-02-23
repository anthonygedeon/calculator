//
//  CalculatorDisplay.swift
//  Calculator
//
//  Created by Anthony Gedeon on 2/22/21.
//

import SwiftUI

struct CalculatorDisplay: View {
    var body: some View {
        
        VStack(alignment: .trailing) {
            Text("308 x 42")
                .font(.custom("Roboto-Medium", size: 32))
                .foregroundColor(.grayText)
            
            Text("12, 936")
                .font(.custom("Roboto-Bold", size: 53))
                .foregroundColor(.grayText)
                
        }
        .padding(.top, 42)
        .padding(.bottom, 16)
        .frame(maxWidth: .infinity, alignment: .trailing)
        
    }
}
