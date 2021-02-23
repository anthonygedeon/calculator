//
//  NumericKeypad.swift
//  Calculator
//
//  Created by Anthony Gedeon on 2/22/21.
//

import SwiftUI

struct NumericKeypad: View {
    
    private let gridLayout: [GridItem] = [
        GridItem(.adaptive(minimum: 80), spacing: 14),
        GridItem(.adaptive(minimum: 80), spacing: 14),
        GridItem(.adaptive(minimum: 80), spacing: 14),
        GridItem(.adaptive(minimum: 80), spacing: 14)
    ]
    
    var body: some View {
        ZStack {
            LazyVGrid(columns: gridLayout, spacing: 14) {
                ForEach((0 ..< 20), id: \.self) { _ in
                    Text("")
                        .frame(minWidth: 0, maxWidth: .infinity, minHeight: 61)
                        .foregroundColor(.grayText)
                        .background(Color.darkNumPad)
                        .cornerRadius(10)
                }
            }
            .padding(.horizontal, 24)
            .padding(.vertical, 24)
        }
        .frame(maxWidth: .infinity, minHeight: 0, maxHeight: .infinity)
        .background(Color.darkForeground)
        .cornerRadius(42.0, [.topLeft, .topRight])
    }
    
}
